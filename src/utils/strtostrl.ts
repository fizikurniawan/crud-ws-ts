export function parseQueryFilter(qry: any) {
  let str: any = '';
  const A = JSON.parse(qry);
  let i = 1;
  A.map(x => {
    console.log(x);
    if (x && x.op && x.op.toLowerCase() === 'ilike') {
      str += i == A.length ? `${x.fieldName} iLike '%${x.query}%'` : ` ${x.fieldName} iLike '%${x.query}%' AND `;
    }
    i++;
  });

  return str;
}
