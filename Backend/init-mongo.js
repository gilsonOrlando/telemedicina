db = db.getSiblingDB('telemedicina');
db.createUser({
  user: 'developer',
  pwd: 'mydatabase123',
  roles: [
    { role: 'readWrite', db: 'telemedicina' }
  ]
});
