import React from "react";

export default function Dashboard() {
  return (
    <div style={{ background: "#8fd4d9" }}>
      <div class="header">
        <div class="header__search">Dashboard</div>
        <div class="header__avatar"></div>
      </div>

      <main class="main">
        <div class="main-header">
          <div class="main-header__heading">Hello User</div>
          <div class="main-header__updates">Recent Items</div>
        </div>

        <div class="main-overview">
          <div class="overviewcard">
            <div class="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
          <div class="overviewcard">
            <div class="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
          <div class="overviewcard">
            <div class="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
          <div class="overviewcard">
            <div class="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
        </div>

        <div class="main-cards">
          <div class="card">Card</div>
          <div class="card">Card</div>
          <div class="card">Card</div>
        </div>
      </main>

      <footer class="footer">
        <div class="footer__copyright">&copy; 2022 MTH</div>
        <div class="footer__signature">Home based monitoring system</div>
      </footer>
    </div>
  );
}
