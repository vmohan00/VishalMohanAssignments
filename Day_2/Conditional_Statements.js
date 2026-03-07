function launchBrowser(browserName) {
    
    if (browserName === "chrome") {
        
        console.log(`Success: ${browserName} browser launched.`); 
    } else {
        console.log(`The browser ${browserName} is supported, but it is not Chrome.`);
    }
}

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Executing Smoke Tests: High-level health check.");
            break;
        case "sanity":
            console.log("Executing Sanity Tests: Checking specific bug fixes.");
            break;
        case "regression":
            
            console.log("Executing Regression Tests: Full suite verification.");
            break;
        default:
            console.log("Unknown test type. Defaulting to: Smoke Test.");
            break;
    }
}


launchBrowser("chrome");
launchBrowser("firefox");

runTests("regression");
runTests("performance"); 