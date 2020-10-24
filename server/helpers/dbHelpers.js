module.exports = db => {
  const getGrowers = () => {
    const query = {
      text: `SELECT * FROM growers`
    };

    return db.query(query)
      .then((result) => result.rows)
      .catch((err) => err.message);
  };

  const getLandholders = () => {
    const query = {
      text: `SELECT * FROM landholders`
    };

    return db.query(query)
      .then((result) => result.rows)
      .catch((err) => err.message);
  };

  const addNewGrower = ({ category, name, email, address, message }) => {
    const query = {
      text: `INSERT INTO growers (category, name, email, address, message) 
             VALUES($1, $2, $3, $4, $5) RETURNING *`,
      values: [category, name, email, address, message],
    };
    return db.query(query)
      .then((result) => result.rows[0])
      .catch((err) => err.message);
  };

  const addNewLandholder = ({ category, name, email, address, message }) => {
    const query = {
      text: `INSERT INTO landholders (category, name, email, address, message) 
             VALUES($1, $2, $3, $4, $5) RETURNING *`,
      values: [category, name, email, address, message],
    };
    return db.query(query)
      .then((result) => result.rows[0])
      .catch((err) => err.message);
  };

  return {
    getGrowers,
    addNewGrower,
    getLandholders,
    addNewLandholder
  }
}

