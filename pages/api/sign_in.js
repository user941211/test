import { query } from '../lib/db';

async function getDataFromDatabase() {
  try {
    const result = await query('SELECT * FROM your_table_name');
    return result.rows;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export async function getServerSideProps() {
    const data = await getDataFromDatabase();
    return {
      props: { data },
    };
  }