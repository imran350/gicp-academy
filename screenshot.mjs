import puppeteer from 'puppeteer'
import { mkdirSync, existsSync } from 'fs'
import { join } from 'path'

const dir = './temporary screenshots'
mkdirSync(dir, { recursive: true })

const url = process.argv[2] || 'http://localhost:3000'
const label = process.argv[3] || ''

// Find next available screenshot number
let n = 1
while (existsSync(join(dir, `screenshot-${n}${label ? `-${label}` : ''}.png`))) {
  n++
}

const filename = join(dir, `screenshot-${n}${label ? `-${label}` : ''}.png`)

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
await page.screenshot({ path: filename, fullPage: true })
await browser.close()

console.log(`Screenshot saved: ${filename}`)
