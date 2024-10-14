export const loggerMidelware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// export { loggerMidelware };
