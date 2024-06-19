import React from "react";

function Footer() {
  return (
    <footer>
      <div>
        <h1>Footer</h1>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col md:flex-row">
            <div>
              <h2>Title1</h2>
            </div>
            <div>
              <h2>Title2</h2>
            </div>
            <div>
              <h2>Title3</h2>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col">
            <div>
              <h2>Title4</h2>
            </div>
            <div>
              <h2>Title5</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
