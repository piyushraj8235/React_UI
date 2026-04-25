import React, { useState } from "react";

export const GoalkeeperGloveCard = ({
  image = "https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?w=600&q=80",
  brand = "Adidas",
  model = "Predator Pro",
  price = 129.99,
  currency = "$",
  discount = 20,
  rating = 4.5,
  reviews = 120,
  accent = "#6366f1",
  bg = "#0f172a",
  onAddToCart = () => {},
  onViewDetails = () => {}
}) => {
  const [hovered, setHovered] = useState(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const discountedPrice = price - (price * discount / 100);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bg,
        borderRadius: "20px",
        overflow: "hidden",
        width: "280px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)"
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
        <img src={image} alt={model} style={{ width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.4s ease" }} />
        {discount > 0 && (
          <div style={{ position: "absolute", top: "12px", right: "12px", padding: "4px 10px", borderRadius: "20px", background: alpha("#e11d48", 0.85), fontSize: "12px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "0.5px" }}>-{discount}%</div>
        )}
      </div>
      <div style={{ padding: "18px" }}>
        <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginBottom: "6px" }}>{brand}</div>
        <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", margin: "0 0 8px", lineHeight: 1.4 }}>{model}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < Math.floor(rating) ? "#fbbf24" : "rgba(255,255,255,0.15)"} stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            ))}
          </div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>({reviews})</div>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "18px" }}>
          <div style={{ fontSize: "20px", fontWeight: "800", color: accent }}>{currency}{discountedPrice.toFixed(2)}</div>
          {discount > 0 && (
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)", textDecoration: "line-through" }}>{currency}{price.toFixed(2)}</div>
          )}
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={onAddToCart}
            style={{ flex: 1, padding: "11px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")" , color: "#fff", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}
          >Add to Cart</button>
          <button
            onClick={onViewDetails}
            style={{ flex: 1, padding: "11px", borderRadius: "12px", border: "1px solid " + alpha(accent, 0.3), background: "transparent", color: accent, fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}
          >Details</button>
        </div>
      </div>
    </div>
  );
};