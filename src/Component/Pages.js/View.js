import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function View() {
  const [appointment, setAppointment] = useState({});
  const [listNumber, setListNumber] = useState(0); // Initialize listNumber to 0
  const apiUrl = "http://localhost:8080/appointments/";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        setAppointment(data[data.length - 1] || {});
        setListNumber(data.length); // Set the listNumber to the length of data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
        <div className="w-100 float-left offer-con">
          <div className="col-6 mx-auto mt-5">
            <div className="offer-inner-con banner-overlay-img">
              <div className="row">
                <div className="col-10 mx-auto">
                  <h2 className="text-white text-center mt-4">Appointment Scheduled</h2>
                  <div className="offer-right-con overlay-img mt-4">
                    <h4 className="text-white">Appointment Number: <span>{listNumber}</span></h4>
                    <h4 className="text-white text-capitalize">Name: <span>{appointment.name}</span></h4>
                    <h4 className="text-white">Mobile Number: <span>+91 {appointment.phone}</span></h4>
                    <h4 className="text-white">Gender: <span>{appointment.gender}</span></h4>
                    <h4 className="text-white">Date: <span>{appointment.date}</span></h4>
                    <h4 className="text-white">Appointment Time: <span>{appointment.time}</span></h4>
                    <button className="btn px-4 py-2 mx-auto d-flex mt-4" onClick={handlePrint}>Print</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
