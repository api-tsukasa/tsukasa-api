import { connect } from 'mongoose';

export async function startConnection() {
    const db = await connect('mongodb://localhost/tsukaApiGalery');
    console.log('Database is connected');
}
