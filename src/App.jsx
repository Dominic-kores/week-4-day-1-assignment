import "./App.css";

import ProfileCard from "./components/ProfileCard.jsx";
import StarRating from "./components/StarRating.jsx";
import PriceTag from "./components/PriceTag.jsx";
import AlertBox from "./components/AlertBox.jsx";
import NavBar from "./components/NavBar.jsx";
import ProductCard from "./components/ProductCard.jsx";
import TeamPage from "./components/TeamPage.jsx";

function App() {
  // Navigation links
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Team", href: "#team" },
  ];

  // Product data
  // Requirement: 2 in stock and 2 out of stock
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
      price: 4500,
      rating: 5,
      inStock: true,
    },
    {
      id: 2,
      name: "Smart Watch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
      price: 7500,
      rating: 4,
      inStock: true,
    },
    {
      id: 3,
      name: "Digital Camera",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
      price: 25000,
      rating: 4,
      inStock: false,
    },
    {
      id: 4,
      name: "Laptop",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
      price: 85000,
      rating: 5,
      inStock: false,
    },
  ];

  // Kenyan team members
  const team = [
    {
      name: "Amina Wanjiku",
      role: "Lead Developer",
      avatar: "images/amina.jpg",
      bio: "Amina leads the development team and specialises in modern React applications.",
    },
    {
      name: "Brian Ochieng",
      role: "UI Designer",
      avatar: "images/IMG_9017.JPG",
      bio: "Brian creates simple and accessible user interfaces for web applications.",
    },
    {
      name: "Faith Njeri",
      role: "Frontend Developer",
      avatar: "images/images (1).jpeg",
      bio: "Faith builds responsive interfaces using React, JavaScript, HTML and CSS.",
    },
    {
      name: "Kevin Kiptoo",
      role: "Backend Developer",
      avatar: "images/IMG_9018.JPG",
      bio: "Kevin develops APIs and server-side systems for scalable applications.",
    },
    {
      name: "Mercy Atieno",
      role: "Project Manager",
      avatar: "images/images.jpeg",
      bio: "Mercy coordinates projects and ensures the development team meets its goals.",
    },
    {
      name: "David Mwangi",
      role: "QA Engineer",
      avatar: "images/IMG_9016.JPG",
      bio: "David tests applications and helps maintain reliable and high-quality software.",
    },
  ];

  return (
    <>
      {/* Navigation component */}
      <NavBar
        brand="TechHub Kenya"
        links={navLinks}
      />

      <main className="container">

        {/* =========================
            TASK 1
        ========================== */}
        <section id="home">
          <h1>Task 1: React Components & Props</h1>

          <div className="task-one-grid">

            <ProfileCard
              name="Dominic Kisioya"
              title="Full Stack Developer"
              avatar="images/IMG_9015.JPG"
              location="Nairobi, Kenya"
            />

            <div className="demo-card">
              <h3>Star Rating</h3>

              <StarRating
                rating={3}
                maxStars={5}
              />
            </div>

            <div className="demo-card">
              <h3>Price Tag</h3>

              <PriceTag
                price={2000}
                currency="KES"
                discount={25}
              />
            </div>

          </div>

          <div className="alerts">
            <AlertBox
              type="success"
              message="Success!"
            >
              Your work was saved successfully.
            </AlertBox>

            <AlertBox
              type="warning"
              message="Warning!"
            >
              Please check your information.
            </AlertBox>

            <AlertBox
              type="error"
              message="Error!"
            >
              Something went wrong.
            </AlertBox>
          </div>
        </section>

        {/* =========================
            TASK 2
        ========================== */}
        <section id="products">
          <div className="section-heading">
            <h2>Task 2: Products</h2>
            <p>ProductCard Conditional Rendering</p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                rating={product.rating}
                inStock={product.inStock}
              />
            ))}
          </div>
        </section>

        {/* =========================
            TASK 3
        ========================== */}
        <section id="team">
          <TeamPage members={team} />
        </section>

      </main>
    </>
  );
}

export default App;
