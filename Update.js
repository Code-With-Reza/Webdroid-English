//Set current version data
var versionName = "3.0.0";
var versionCode = 231224;
var buildDate = "March 19, 2024";
//Function: Get the latest version data
function checkUpdate() {
    var getUpdateData = new XMLHttpRequest();
    getUpdateData.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            updateData = JSON.parse(this.responseText);
            processUpdate();
        }
    };
    getUpdateData.open("GET", "https://raw.githubusercontent.com/Code-With-Reza/Webdroid-English/main/version.json", true);
    getUpdateData.send();
}
