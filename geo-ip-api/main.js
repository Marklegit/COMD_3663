const unorderList = document.getElementById("geoIp");
const geoIpUrl = `https://freegeoip.app/json/`;

function getGeoIp(ip) {
	fetch(geoIpUrl)
		.then(res => res.json())
		.then(geoIp => {
			ip = geoIp;
		//const bodyElement = document.querySelector("body");	
		//const mainContent = docuement.querySelector(".api_content");
		const infoHeading = document.querySelector("#heading");
		infoHeading.innerHTML = `Hello <span>user</span>!<br/>
			Click on the link below to find your location on <span>Google Open Maps</span>:`;
		const status = document.querySelector("#status");
		const mapSource = document.querySelector("#map_source");
		mapSource.href = ``;
		mapSource.textContent = ``;
		const divCenter = document.querySelector(".center");
		divCenter.innerHTML = `
			The <span>name</span> of the <span>country</span> you are hailing from is <span class="data">${ip["country_name"]}</span>.<br/>`;
		function geoSuccess(position) {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;
			status.textContent = ``;
			mapSource.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
			mapSource.textContent = `Your Coordinates are Latitude: ${latitude} ° and Longitude: ${longitude} °`;
		}
		function error() {
			status.textContent = `Geolocation is not supported by your broswer.`;
		}
		if(!navigator.geolocation){
			status.textContent = `Geolocation is not supported by your broswer.`;
		}
		else{
			status.textContent = `Locating...`
			navigator.geolocation.getCurrentPosition(geoSuccess, error);
		}
		});
}
function refresh() {
	document.location.reload();
}

const pinPointLocation = document.querySelector("#pinpoint_location");
//pinPointLocation.textContent = `Find me`.trim();
pinPointLocation.addEventListener("mousedown", getGeoIp);

const refreshBtn = document.querySelector("#Refresh_button");
refreshBtn.textContent = `Refresh me`.trim();
refreshBtn.addEventListener("mousedown", refresh);
