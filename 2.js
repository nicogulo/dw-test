const getDomainWithoutSubdomain = (url) => {
  const urlParts = new URL(url).hostname.split(".");

  return urlParts
    .slice(0)
    .slice(-(urlParts.length === 1 ? 1 : 5))
    .join(".");
};

[
  "https://dumbways.id",
  "https://finance.detik.com",
  "https://support.hostinger.co.id",
  "https://jdih.kominfo.go.id",
  "https://github.com",
].forEach((url) => {
  console.log(getDomainWithoutSubdomain(url));
});
