import React from 'react'

export default function View() {
    const handlePrint = () => {
        const printWindow = window.open('', '_blank');
        const content = document.querySelector('.col-10.mx-auto').innerHTML;
        printWindow.document.write('<html><head><title>Print</title></head><body>');
        printWindow.document.write(content);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    };

  return (
    <div>
        <section>
         <div class="w-100 float-left offer-con">
            <div class="col-6 mx-auto mt-5">
               <div class="offer-inner-con banner-overlay-img">
                  <div class="row">
                   
                     <div class=" col-10 mx-auto">

                        <h2 class="text-white text-center mt-4">Appoinment Sheduled </h2>
                        <div class="offer-right-con overlay-img mt-4">
                           <h4 class="text-white">Appoinment Number : <span> #123456</span> </h4>

                           <h4 class="text-white">Name : <span> Tavi Singh</span> </h4>
                           <h4 class="text-white">Mobile Number : <span> +91 1234567890</span> </h4>
                           <h4 class="text-white">Gender : <span> Male</span> </h4>
                           <h4 class="text-white">Date  : <span> 14/08/2023</span> </h4>
                           <h4 class="text-white">Appoinment Time  : <span> 11:00AM</span> </h4>
                           <button class='px-4 py-2 mx-auto  d-flex mt-4 '  onClick={handlePrint}>Print</button>
                        </div>
                     </div>
                  </div>
                 
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
