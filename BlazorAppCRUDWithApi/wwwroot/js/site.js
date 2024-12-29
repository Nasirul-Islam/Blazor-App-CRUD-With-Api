window.generateEmployeePDF = function (employeeData) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(18);
    doc.text("Employee Report", 10, 10);

    doc.setFontSize(12);
    doc.text(`Employee ID: ${employeeData.empID}`, 10, 20);
    doc.text(`Name: ${employeeData.firstName} ${employeeData.lastName}`, 10, 30);
    doc.text(`Email: ${employeeData.email}`, 10, 40);
    doc.text(`Phone: ${employeeData.phoneNumber}`, 10, 50);
    doc.text(`Date of Birth: ${employeeData.dateOfBirth}`, 10, 60);
    doc.text(`Hire Date: ${employeeData.hireDate}`, 10, 70);
    doc.text(`Job Title: ${employeeData.jobTitle}`, 10, 80);
    doc.text(`Department: ${employeeData.department}`, 10, 90);
    doc.text(`Salary: ${employeeData.salary}`, 10, 100);
    doc.text(`Address: ${employeeData.address}`, 10, 110);
    doc.text(`City: ${employeeData.city}`, 10, 120);
    doc.text(`State: ${employeeData.state}`, 10, 130);
    doc.text(`Postal Code: ${employeeData.postalCode}`, 10, 140);
    doc.text(`Country: ${employeeData.country}`, 10, 150);
    doc.text(`Active Status: ${employeeData.isActive}`, 10, 160);
    doc.text(`Created Date: ${employeeData.createdDate}`, 10, 170);
    doc.text(`Updated Date: ${employeeData.updatedDate}`, 10, 180);

    // Save the PDF or open print dialog
    doc.save("EmployeeReport.pdf");
};


