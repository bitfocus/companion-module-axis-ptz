import { Buffer } from "node:buffer"
import { createHash } from 'node:crypto'
import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import { once } from 'node:events'
import { test } from 'node:test'
import { getActionDefinitions } from '../src/actions.js'

test('PTZ actions send the expected HTTP command and refresh position', async () => {
	const requests = []
	let refreshes = 0
	const server = createServer((request, response) => {
		requests.push({ url: request.url, authorization: request.headers.authorization })
		response.end('ok')
	})
	server.listen(0, '127.0.0.1')
	await once(server, 'listening')
	try {
		const instance = {
			config: { host: '127.0.0.1', httpPort: server.address().port },
			urlliboptions: { auth: 'operator:secret', timeout: 1000 },
			log() {},
			getCameraPosition() { refreshes++ },
			checkFeedbacks() {},
		}
		const actions = getActionDefinitions(instance)
		await actions.left.callback({ options: { speed: 25 } })
		await actions.right.callback({ options: { speed: 50 } })
		for (let i = 0; i < 100 && refreshes < 2; i++) {
			await new Promise((resolve) => setTimeout(resolve, 10))
		}
		assert.deepEqual(requests.map((request) => request.url).sort(), [
			'/axis-cgi/com/ptz.cgi?continuouspantiltmove=-25,0&camera=1',
			'/axis-cgi/com/ptz.cgi?continuouspantiltmove=50,0&camera=1',
		].sort())
		assert.ok(requests.every((request) => request.authorization === 'Basic ' + Buffer.from('operator:secret').toString('base64')))
		assert.equal(refreshes, 2)
	} finally {
		server.closeAllConnections()
		await new Promise((resolve) => server.close(resolve))
	}
})

test('PTZ actions complete a digest authentication challenge', async () => {
	let authenticated = false
	let refreshed = false
	const md5 = (value) => createHash('md5').update(value).digest('hex')
	const server = createServer((request, response) => {
		if (!request.headers.authorization) {
			response.writeHead(401, { 'WWW-Authenticate': 'Digest realm="camera", nonce="test-nonce", qop="auth", algorithm=MD5' })
			response.end()
			return
		}
		const fields = Object.fromEntries([...request.headers.authorization.matchAll(/(\w+)=(?:"([^"]*)"|([^, ]+))/g)].map((match) => [match[1], match[2] !== undefined ? match[2] : match[3]]))
		const expected = md5(`${md5('operator:camera:secret')}:test-nonce:${fields.nc}:${fields.cnonce}:auth:${md5(`GET:${request.url}`)}`)
		authenticated = fields.username === 'operator' && fields.uri === request.url && fields.response === expected
		response.writeHead(authenticated ? 200 : 403)
		response.end('ok')
	})
	server.listen(0, '127.0.0.1')
	await once(server, 'listening')
	try {
		const actions = getActionDefinitions({
			config: { host: '127.0.0.1', httpPort: server.address().port },
			urlliboptions: { digestAuth: 'operator:secret', timeout: 1000 },
			log() {}, checkFeedbacks() {}, getCameraPosition() { refreshed = true },
		})
		await actions.left.callback({ options: { speed: 25 } })
		for (let i = 0; i < 100 && !refreshed; i++) await new Promise((resolve) => setTimeout(resolve, 10))
		assert.equal(authenticated, true)
		assert.equal(refreshed, true)
	} finally {
		server.closeAllConnections()
		await new Promise((resolve) => server.close(resolve))
	}
})
