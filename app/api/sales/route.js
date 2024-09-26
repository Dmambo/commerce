export async function GET(req) {
    const salesData = {
      salesValidated: 150,
      quotesSent: 90,
      totalSubscriptions: 250,
      totalTurnoverValidated: 15000.75,
      subscriptionTurnover: {
        total: 7000.50,
        typeBreakdown: {
          Basic: 4000.75,
          Premium: 3000.00,
        },
      },
      agencies: [
        {
          name: "Kaloum",
          sales: [
            { agent: "Alice Johnson", amount: 500.00, type: "Basic", validated: true, date: "2024-01-15" },
            { agent: "Bob Smith", amount: 750.00, type: "Premium", validated: true, date: "2024-02-10" },
            { agent: "Cynthia Lee", amount: 300.00, type: "Basic", validated: true, date: "2024-03-05" },
            { agent: "David Brown", amount: 600.00, type: "Premium", validated: false, date: "2024-04-20" },
          ],
        },
        {
          name: "Matam",
          sales: [
            { agent: "John Doe", amount: 300.00, type: "Basic", validated: true, date: "2024-01-25" },
            { agent: "Jane Doe", amount: 1200.00, type: "Premium", validated: false, date: "2024-02-18" },
            { agent: "Emma White", amount: 400.00, type: "Basic", validated: true, date: "2024-03-12" },
            { agent: "Michael Green", amount: 850.00, type: "Premium", validated: true, date: "2024-04-30" },
          ],
        },
        {
          name: "Camayenne",
          sales: [
            { agent: "Mike Brown", amount: 400.00, type: "Basic", validated: true, date: "2024-01-10" },
            { agent: "Sara White", amount: 850.00, type: "Premium", validated: true, date: "2024-02-22" },
            { agent: "Chris Black", amount: 200.00, type: "Basic", validated: false, date: "2024-03-15" },
            { agent: "Nina Gold", amount: 750.00, type: "Premium", validated: true, date: "2024-04-25" },
          ],
        },
        {
          name: "Matoto",
          sales: [
            { agent: "Tom Green", amount: 600.00, type: "Basic", validated: true, date: "2024-01-30" },
            { agent: "Emma Black", amount: 200.00, type: "Basic", validated: false, date: "2024-02-14" },
            { agent: "Lucy Gray", amount: 1500.00, type: "Premium", validated: true, date: "2024-03-20" },
            { agent: "Oliver King", amount: 300.00, type: "Basic", validated: true, date: "2024-04-05" },
          ],
        },
      ],
    };
  
    return new Response(JSON.stringify({
      status: 'success',
      data: salesData
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });0
  }
  