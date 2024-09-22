import database from "@/database";

async function getDashboardSales() {
  const data = await database.order.aggregate({
    _sum: {total: true },
    _count: true,
  });
  return {
    amount: (data._sum?.total || 0) / 100,
    count: data._count,
  }
}

async function getDashboardUsers() {
  const [count, orders] = await Promise.all([
    database.user.count(),
    database.order.aggregate({
      _sum: { total: true },
    })
  ]);
  return {
    count,
    value: count && (orders._sum?.total || 0) / count / 100,
  }
}

async function getDashboardProducts() {
  const [available, unavailable] = await Promise.all([
    database.product.count({ where: { available: true } }),
    database.product.count({ where: { available: false } })
  ]);
  return { available, unavailable };
}

export async function getDashboardData() {
  const [sales, users, products] = await Promise.all([getDashboardSales(), getDashboardUsers(), getDashboardProducts()]);
  return { sales, users, products };
}