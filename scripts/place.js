const year = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = (
            13.12 +
            0.6215 * temperature -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temperature * Math.pow(windSpeed, 0.16)
        );
        return `${windChill.toFixed(1)}°C`;
    } else {
        return "N/A";
    }
}

const temperature = 10;
const windSpeed = 5;

const windChill = calculateWindChill(temperature, windSpeed);

document.getElementById('windChill').textContent = windChill;