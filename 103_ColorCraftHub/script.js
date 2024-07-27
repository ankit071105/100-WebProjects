function calculateColors() {
    const colorInput = document.getElementById('colorInput').value;
    const rgb = hexToRGB(colorInput);
    document.getElementById('rgbResult').innerHTML = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
    const hsl = hexToHSL(colorInput);
    document.getElementById('hslResult').innerHTML = `HSL: ${hsl.h}, ${hsl.s}%, ${hsl.l}%`;
     document.getElementById('hexResult').innerHTML = `HEX: ${colorInput}`;
    const cmyk = hexToCMYK(colorInput);
    document.getElementById('cmykResult').innerHTML = `CMYK: ${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%`;
    const hwb = hexToHWB(colorInput);
    document.getElementById('hwbResult').innerHTML = `HWB: ${hwb.h}, ${hwb.w}%, ${hwb.b}%`;
    document.getElementById('ncolResult').innerHTML = `NCol: Placeholder`;
    document.getElementById('ncolResult').style.backgroundColor = colorInput;
    document.getElementById('ncolResult').style.color = '#fff';
}

function hexToRGB(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

function hexToHSL(hex) {
    let { r, g, b } = hexToRGB(hex);
    r /= 255;
    g /= 255;
    b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hexToCMYK(hex) {
    let { r, g, b } = hexToRGB(hex);
    let k = 1 - Math.max(r / 255, g / 255, b / 255);
    let c = (1 - r / 255 - k) / (1 - k) || 0;
    let m = (1 - g / 255 - k) / (1 - k) || 0;
    let y = (1 - b / 255 - k) / (1 - k) || 0;
    return { c: Math.round(c * 100), m: Math.round(m * 100), y: Math.round(y * 100), k: Math.round(k * 100) };
}

function hexToHWB(hex) {
    let { r, g, b } = hexToRGB(hex);
    r /= 255;
    g /= 255;
    b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, w, b_;
    if (max === min) {
        h = 0;
    } else if (max === r) {
        h = (60 * ((g - b) / (max - min)) + 360) % 360;
    } else if (max === g) {
        h = (60 * ((b - r) / (max - min)) + 120) % 360;
    } else {
        h = (60 * ((r - g) / (max - min)) + 240) % 360;
    }
    w = min;
    b_ = 1 - max;
    return { h: Math.round(h), w: Math.round(w * 100), b: Math.round(b_ * 100) };
}

function generateGradient() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const percentage = document.getElementById('percentage').value;

    const gradientResult = document.getElementById('gradientResult');
    gradientResult.style.background = `linear-gradient(to bottom, ${color1}, ${color2} ${percentage}%)`;
}

function showCSS(direction) {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const percentage = document.getElementById('percentage').value;
    const gradientResult = document.getElementById('gradientResult');
    gradientResult.style.background = `linear-gradient(${direction}, ${color1}, ${color2} ${percentage}%)`;
    const cssCode = document.getElementById('cssCode');
    cssCode.innerHTML = `<h2>CSS Code for ${direction}</h2>
                         <p>background: linear-gradient(${direction}, ${color1}, ${color2} ${percentage}%);</p>`;
}
document.getElementById('percentage').addEventListener('input', (event) => {
    document.getElementById('percentageValue').innerText = `${event.target.value}%`;
});
