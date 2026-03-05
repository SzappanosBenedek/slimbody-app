/**
 * OptimizedImage – SEO-barát képkomponens
 *
 * Props:
 *  src        – kép elérési út (kötelező)
 *  alt        – kulcsszavas alt szöveg (kötelező)
 *  width      – pixelben (CLS elkerüléshez)
 *  height     – pixelben (CLS elkerüléshez)
 *  priority   – ha true: fetchpriority="high" + loading="eager" (hero képekhez)
 *  className  – Tailwind osztályok
 *  sizes      – responsive sizes string
 */
export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    priority = false,
    className = '',
    sizes = '100vw',
    style,
    ...rest
}) {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            fetchpriority={priority ? 'high' : undefined}
            decoding={priority ? 'sync' : 'async'}
            sizes={sizes}
            className={className}
            style={style}
            {...rest}
        />
    )
}

/*
 * Javasolt alt szövegek a SlimBody képekhez:
 *
 * /images/hiemthas.webp     → "HIEMT kezelés has előtt-után Szentendrén"
 * /images/hiemtfenek.webp   → "HIEMT kezelés fenék izomstimulátor Szentendrén"
 * /images/hiemtcomb.webp    → "HIEMT comb kezelés alakformálás Szentendrén"
 * /images/hiemtkar.webp     → "HIEMT kar felkar kezelés Szentendrén"
 * /images/hiemtvadli.webp   → "HIEMT vádli kezelés izomstimulátor"
 * /images/heroimage.webp    → "SlimBody alakformáló szalon Szentendre Korona utca"
 * /images/wiener.webp       → "Wiener testtekercselés kezelés Szentendrén"
 * /images/intimpad.webp     → "HIEMT intimpad medencefenék erősítés kezelés"
 */
