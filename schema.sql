CREATE TABLE todos
(
    task VARCHAR(255),
    taskDone BOOLEAN DEFAULT false,
    setDate DATE,
    created TIMESTAMP DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP
);

/* run the file in mysql: source schema.sql */



INSERT INTO todos (task) VALUES
('get some apples'), ('play with the cats');
