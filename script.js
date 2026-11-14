
// ==========================================
// DARK EMPIRE - BROWSER INFORMATION SYSTEM
// JavaScript Functionality
// ==========================================


// MAIN FUNCTION TO DISPLAY BROWSER INFORMATION

function displayBrowserInfo() {

    // GET BROWSER USER AGENT
    let userAgent = navigator.userAgent;

    // DETECT BROWSER NAME AND VERSION
    let browserName = "Unknown Browser";
    let browserVersion = "Not Available";

    let browserMatch;

    if ((browserMatch = userAgent.match(/Edg\/([\d.]+)/))) {
        browserName = "Microsoft Edge";
        browserVersion = browserMatch[1];
    }

    else if ((browserMatch = userAgent.match(/OPR\/([\d.]+)/))) {
        browserName = "Opera";
        browserVersion = browserMatch[1];
    }

    else if ((browserMatch = userAgent.match(/Chrome\/([\d.]+)/))) {
        browserName = "Google Chrome";
        browserVersion = browserMatch[1];
    }

    else if ((browserMatch = userAgent.match(/Firefox\/([\d.]+)/))) {
        browserName = "Mozilla Firefox";
        browserVersion = browserMatch[1];
    }

    else if ((browserMatch = userAgent.match(/Version\/([\d.]+).*Safari/))) {
        browserName = "Apple Safari";
        browserVersion = browserMatch[1];
    }


    // DETECT OPERATING SYSTEM

    let operatingSystem = "Unknown Operating System";

    if (userAgent.includes("Windows")) {
        operatingSystem = "Windows";
    }

    else if (userAgent.includes("Android")) {
        operatingSystem = "Android";
    }

    else if (/iPhone|iPad|iPod/.test(userAgent)) {
        operatingSystem = "iOS";
    }

    else if (userAgent.includes("Mac OS")) {
        operatingSystem = "macOS";
    }

    else if (userAgent.includes("Linux")) {
        operatingSystem = "Linux";
    }


    // GET PLATFORM

    let platform = navigator.platform || "Not Available";


    // GET LANGUAGE

    let language = navigator.language;


    // CHECK COOKIES

    let cookies = navigator.cookieEnabled ? "Enabled" : "Disabled";


    // CHECK INTERNET CONNECTION

    let internet = navigator.onLine ? "Online" : "Offline";


    // GET SCREEN RESOLUTION

    let resolution =
        screen.width + " × " + screen.height;


    // GET AVAILABLE SCREEN SIZE

    let screenSize =
        screen.availWidth + " × " + screen.availHeight;


    // DISPLAY INFORMATION ON WEBPAGE

    document.getElementById("browserName").innerText =
        browserName;

    document.getElementById("browserVersion").innerText =
        browserVersion;

    document.getElementById("operatingSystem").innerText =
        operatingSystem;

    document.getElementById("platform").innerText =
        platform;

    document.getElementById("language").innerText =
        language;

    document.getElementById("cookies").innerText =
        cookies;

    document.getElementById("internet").innerText =
        internet;

    document.getElementById("resolution").innerText =
        resolution;

    document.getElementById("screenSize").innerText =
        screenSize;

    document.getElementById("userAgent").innerText =
        userAgent;


    // ADVANCED DEVICE INFORMATION

    let cpuCores = navigator.hardwareConcurrency || "Not Available";

    let colorDepth = screen.colorDepth + " bits";

    let touchSupport = navigator.maxTouchPoints > 0
        ? "Supported"
        : "Not Detected";

    document.getElementById("cpuCores").innerText = cpuCores;

    document.getElementById("colorDepth").innerText = colorDepth;

    document.getElementById("touchSupport").innerText = touchSupport;


}


// REFRESH INFORMATION WHEN CONNECTION CHANGES

window.addEventListener("online", displayBrowserInfo);

window.addEventListener("offline", displayBrowserInfo);


// COPY INFORMATION FUNCTION

function copyInformation() {

    let information = `
BROWSER INFORMATION SYSTEM

Browser Name: ${document.getElementById("browserName").innerText}

Browser Version: ${document.getElementById("browserVersion").innerText}

Operating System: ${document.getElementById("operatingSystem").innerText}

Platform: ${document.getElementById("platform").innerText}

Language: ${document.getElementById("language").innerText}

Cookies: ${document.getElementById("cookies").innerText}

Internet Status: ${document.getElementById("internet").innerText}

Screen Resolution: ${document.getElementById("resolution").innerText}

Screen Size: ${document.getElementById("screenSize").innerText}

User Agent: ${document.getElementById("userAgent").innerText}
`;

    navigator.clipboard.writeText(information)
        .then(function() {
            alert("Browser information copied successfully!");
        })
        .catch(function() {
            alert("Unable to copy. Please try using localhost or HTTPS.");
        });

}


// AUTOMATICALLY DISPLAY INFORMATION WHEN PAGE LOADS

window.onload = displayBrowserInfo;


 // LIVE ROYAL CLOCK

function updateRoyalClock() {

    let now = new Date();

    let time = now.toLocaleTimeString();

    let date = now.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

    document.getElementById("liveClock").innerText = time;

    document.getElementById("liveDate").innerText = date;
}

updateRoyalClock();

setInterval(updateRoyalClock, 1000);
