// Grafik Penjualan Bulanan
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Sales in 2024',
            data: [12000, 15000, 18000, 13000, 22000, 17000, 25000, 32000, 35000, 33000, 33500, 40000],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Grafik Kategori Produk
// Data untuk grafik berdasarkan tabel
const productNames = ['Handphone', 'Laptop', 'Shirts', 'Sneakers', 'Headphones'];
const unitsSold = [1200, 800, 2000, 1500, 1000];

const salesDataCtx = document.getElementById('salesDataChart').getContext('2d');
const salesDataChart = new Chart(salesDataCtx, {
    type: 'bar',
    data: {
        labels: productNames,
        datasets: [{
            label: 'Units Sold',
            data: unitsSold,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Units Sold'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Products'
                }
            }
        }
    }
});

const categoryCtx = document.getElementById('categoryChart').getContext('2d');
const categoryChart = new Chart(categoryCtx, {
    type: 'pie',
    data: {
        labels: ['Electronics', 'Accessories', 'Footwear', 'Fashion'],
        datasets: [{
            label: 'Product Categories',
            data: [40, 25, 15, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
