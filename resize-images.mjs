import sharp from 'sharp'
import { writeFile } from 'fs/promises'
import { join } from 'path'

const SOURCE_DIR = '/Users/beni/Downloads/webp képek'
const DEST_DIR = './public/images'

// Forrás fájlnév → cél fájlnév (ékezetes → ékezet nélküli)
const files = [
    { src: 'heroimage.webp', dst: 'heroimage.webp', maxW: 1920, maxH: 1920 },
    { src: 'hiemthas.webp', dst: 'hiemthas.webp', maxW: 1200, maxH: 1200 },
    { src: 'hiemtgep1.webp', dst: 'hiemtgep1.webp', maxW: 1000, maxH: 1400 },
    { src: 'hiemtgep2.webp', dst: 'hiemtgep2.webp', maxW: 1000, maxH: 1400 },
    { src: 'hiemtcomb.webp', dst: 'hiemtcomb.webp', maxW: 1200, maxH: 1200 },
    { src: 'hiemtfenék.webp', dst: 'hiemtfenek.webp', maxW: 1200, maxH: 1200 },
    { src: 'hiemtkar.webp', dst: 'hiemtkar.webp', maxW: 1200, maxH: 1200 },
    { src: 'hiemtkezdokep.webp', dst: 'hiemtkezdokep.webp', maxW: 1600, maxH: 1600 },
    { src: 'hiemtvádli.webp', dst: 'hiemtvadli.webp', maxW: 1200, maxH: 1200 },
    { src: 'intimpad.webp', dst: 'intimpad.webp', maxW: 1000, maxH: 1400 },
    { src: 'wienertesttekercselés.webp', dst: 'wienertesttekercseles.webp', maxW: 1000, maxH: 1400 },
]

for (const { src, dst, maxW, maxH } of files) {
    const srcPath = join(SOURCE_DIR, src)
    const dstPath = join(DEST_DIR, dst)
    try {
        const meta = await sharp(srcPath).metadata()
        const buf = await sharp(srcPath)
            .resize(maxW, maxH, { fit: 'inside', withoutEnlargement: true })
            .webp({ quality: 92, effort: 6 })
            .toBuffer()
        await writeFile(dstPath, buf)
        const saved = ((1 - buf.length / (meta.size || buf.length)) * 100).toFixed(0)
        console.log(`✅ ${dst}: ${meta.width}x${meta.height} → ${(buf.length / 1024).toFixed(1)} KiB`)
    } catch (e) {
        console.error(`❌ ${src}: ${e.message}`)
    }
}
