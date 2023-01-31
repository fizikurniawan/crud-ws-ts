import dbService from '../database';

class UserService {
  private db = new dbService();

  public async findOneById(id: string): Promise<unknown> {
    const res: any = await this.db.query(
      `select * from users where id='${id}'`
    );
    return res.rows && res.rows.length == 1 ? res.rows[0] : null;
  }

  public async findAll(limit: number | 10, offset: number | 0): Promise<unknown> {
    const res: any = await this.db.query(
      `select * from users limit ${limit} offset ${offset}`
    );
    return res.rows && res.rows.length ? res.rows : null;
  }
}
export default UserService;
