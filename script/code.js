

let heading=document.querySelector('#contact')
heading.textContent += 'Contact Us'

// let footer =document.querySelector('.footer')
// footer.innerHTML +=`

// <footer id="copyright">Siphokuhle Nyana.All Rights Reserved.2024&copy; </footer>

// <div id ="icons">
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-meta" viewBox="0 0 16 16">
//   <path fill-rule="evenodd" d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.614-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.136 0 .27.018Z"/>
// </svg>
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
//   <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
// </svg>
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
//   <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
// </svg>
// <div>
// `

// main.innerHTML += `
//  <img id="pic1" src="https://siphokuhlenyana.github.io/eComPics/picture1.jpg" alt="" width="300x"height="150px">
// <img id="pic2" src="https://siphokuhlenyana.github.io/eComPics/IMG_0663.jpg" alt=""width="150px" height="70px">
// <img id="pic3" src="https://siphokuhlenyana.github.io/eComPics/IMG_0661.jpg" alt=""width="300px"height="150px ">
//       <div id="forms">
//       <form action="https://formcarry.com/s/fHqDMEbOdsh"method="POST"enctype="multipart/form-data" >
        
//       <div class="mb-3">
//         <label for="formGroupExampleInput" class="form-label">Name</label>
//         <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your name ">
//       </div>
//       <div class="mb-3">
//         <label for="formGroupExampleInput2" class="form-label">Email address</label>
//         <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your mail address">
//         <div class="col-12">
//           <label for="inputAddress" class="form-label">Address</label>
//           <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
//         </div>
//         <div class="col-12">
//           <label for="inputAddress2" class="form-label">Address 2</label>
//           <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
//         </div>
//         <div class="col-md-6">
//           <label for="inputCity" class="form-label">City</label>
//           <input type="text" class="form-control" id="inputCity">
//         </div>
//         <div class="col-md-4">
//           <label for="inputState" class="form-label">State</label>
//           <select id="inputState" class="form-select">
//             <option selected>Choose...</option>
//             <option>...</option>
//           </select>
//         </div>
//         <div class="col-md-2">
//           <label for="inputZip" class="form-label">Zip</label>
//           <input type="text" class="form-control" id="inputZip">
//         </div>
//         <div class="mb-3">
//           <label for="exampleFormControlTextarea1" class="form-label">Message</label>
//           <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//         </div>
//       </div>
//       <button type="submit">Submit</button>
// </form>
// </div>








// `

