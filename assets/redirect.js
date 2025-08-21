module.exports = (req, res) => {
  const currentPath = req.url || "";
  console.log("Current Path:", currentPath); // For debugging

  // Check for static assets
  const staticExtensions =
    /\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|pdf)$/i;
  if (staticExtensions.test(currentPath)) {
    console.log("Serving static asset:", currentPath);
    return res.status(200).end(); // Let Vercel serve the file
  }

  // Check if the path is the homepage
  const isHome =
    currentPath === "/" ||
    currentPath === "/index.html" ||
    currentPath === "/index.php" ||
    currentPath === "";

  if (!isHome) {
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers.host;
    const homeUrl = `${protocol}://${host}/`;
    console.log("Redirecting to:", homeUrl);
    return res.redirect(308, homeUrl);
  }

  console.log("No redirect needed for:", currentPath);
  res.status(200).end(); // Let Vercel serve the homepage
};
