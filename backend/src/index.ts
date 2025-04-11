// src/index.ts
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors())
app.get('/', (c) => c.text('API en ligne 🎉'))
app.get('/api/hello', (c) => c.json({ message: 'Hello depuis Hono !' }))
app.get("/test", (c) => c.json({test: "Test page"}))

serve(app)
