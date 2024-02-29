import React from "react";
import "/src/assets/Css/teacherPage.css";

const ExampleTable = () => {
  // Example data
  const data = [
    {
      No: 1,
      Name: "John",
      Email: "john@example.com",
      Query: "How can I reset my password?",
      Reply: "Reply Button",
    },
    {
      No: 2,
      Name: "Mary",
      Email: "mary@example.com",
      Query: "Can I change my subscription plan?",
      Reply: "Reply Button",
    },
    {
      No: 3,
      Name: "David",
      Email: "david@example.com",
      Query: "What are the payment options?",
      Reply: "Reply Button",
    },
    {
      No: 4,
      Name: "Emily",
      Email: "emily@example.com",
      Query: "I need help with my account settings",
      Reply: "Reply Button",
    },
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Query</th>
            <th>Reply</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.No}>
              <td>{item.No}</td>
              <td>{item.Name}</td>
              <td>{item.Email}</td>
              <td>{item.Query}</td>
              <td>
                <button className="query-reply">{item.Reply}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExampleTable;
