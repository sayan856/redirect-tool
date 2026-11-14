const ua = navigator.userAgent;

if (
  !ua.includes('Googlebot') &&
  !ua.includes('Google-InspectionTool')
) {
  window.location.href = "https://forum.down-plus.com/637";
} else {
  console.log("error ya baby");
}
