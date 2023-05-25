import { Button, Container, Typography, Grid, Link, Box } from "@mui/material";

const HomePage = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#f2f2f2", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Container maxWidth="lg" style={{ paddingTop: "80px" }}>
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h1" gutterBottom style={{ color: "#333", textAlign: "center", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>
              Welcome to Design Insights
            </Typography>
            <Typography variant="body1" component="p" style={{ marginBottom: "30px", color: "#666", textAlign: "center", fontStyle: "italic" }}>
              Unlock the secrets of software design patterns and elevate your coding skills.
              <br />
              Explore interactive diagrams and learn to create elegant solutions for real-world challenges.
            </Typography>
            <Link href="/assistant" style={{ textDecoration: "none", display: "flex", justifyContent: "center" }}>
              <Button variant="contained" size="large" sx={{ borderRadius: "20px", bgcolor: "#5C6AC4", color: "#fff", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", "&:hover": { bgcolor: "#4761AC" } }}>
                Get Pattern Recommendation
              </Button>
            </Link>
            <Link href="/categories" style={{ textDecoration: "none", display: "flex", justifyContent: "center", marginTop: "10px" }}>
              <Button variant="outlined" size="large" sx={{ borderRadius: "20px", color: "#5C6AC4", borderColor: "#5C6AC4", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", "&:hover": { bgcolor: "#5C6AC4", color: "#fff" } }}>
                Explore Categories
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>

      <Box component="footer" bgcolor="#fff" py={3} style={{ boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)", textAlign: "center", position: "sticky", bottom: "0" }}>
        <Container maxWidth="lg">
          <Typography variant="body2" component="p" style={{ color: "#999" }}>
            &copy; 2023 Design Insights. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" style={{ color: "#999", marginTop: "10px" }}>
            <Link href="#" color="inherit" style={{ marginRight: "10px" }}>
              Terms of Service
            </Link>
            |
            <Link href="#" color="inherit" style={{ marginLeft: "10px" }}>
              Privacy Policy
            </Link>
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default HomePage;
