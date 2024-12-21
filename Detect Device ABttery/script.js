// Check if the Battery Status API is available
if ('getBattery' in navigator) {
    navigator.getBattery().then((battery) => {
        // DOM elements
        const chargingStatus = document.getElementById('charging-status');
        const batteryLevel = document.getElementById('battery-level');
        const chargingTime = document.getElementById('charging-time');
        const dischargingTime = document.getElementById('discharging-time');

        // Update battery information
        function updateBatteryInfo() {
            chargingStatus.textContent = battery.charging ? 'Charging' : 'Not Charging';
            batteryLevel.textContent = `${Math.round(battery.level * 100)}%`;
            chargingTime.textContent = battery.chargingTime === Infinity
                ? 'Not Charging'
                : `${Math.round(battery.chargingTime / 60)} min`;
            dischargingTime.textContent = battery.dischargingTime === Infinity
                ? 'Not Discharging'
                : `${Math.round(battery.dischargingTime / 60)} min`;
        }

        // Initial update
        updateBatteryInfo();

        // Event listeners for battery status changes
        battery.addEventListener('chargingchange', updateBatteryInfo);
        battery.addEventListener('levelchange', updateBatteryInfo);
        battery.addEventListener('chargingtimechange', updateBatteryInfo);
        battery.addEventListener('dischargingtimechange', updateBatteryInfo);
    });
} else {
    alert('Battery Status API is not supported on this device.');
}
