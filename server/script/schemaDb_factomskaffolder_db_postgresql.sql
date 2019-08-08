--
-- Database: factomskaffolder_db
--

CREATE DATABASE factomskaffolder_db;

-- FACTOM BLOCKACHAIN ENTITIES

--
-- Table `identity`
--

CREATE TABLE IF NOT EXISTS identity (
	chain_id varchar(260)  NOT NULL,
	entry_hash varchar(260)  NOT NULL,
	key_pairs json,
	_id serial NOT NULL PRIMARY KEY
);

--
-- Table `chain`
--

CREATE TABLE IF NOT EXISTS chain (
	chain_id varchar(260)  NOT NULL,
	entry_hash varchar(260)  NOT NULL,
	identity int  REFERENCES identity(_id),
	_id serial NOT NULL PRIMARY KEY,
	content varchar(260)  NOT NULL

);

--
-- Table `entry`
--

CREATE TABLE IF NOT EXISTS entry (
	entry_hash varchar(260)  NOT NULL,
	content varchar(260)  NOT NULL,

	-- RELAZIONI
	chain int  REFERENCES chain(_id),

	_id serial NOT NULL PRIMARY KEY

);

-- ENTITIES

--
-- Schema entity doctor
--

CREATE TABLE IF NOT EXISTS "doctor" (
	first_name varchar(40)  NOT NULL,
	last_name varchar(40) ,
	speciality varchar(40) ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity patient
--

CREATE TABLE IF NOT EXISTS "patient" (
	condition varchar(40) ,
	first_name varchar(40)  NOT NULL,
	last_name varchar(40) ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity report
--

CREATE TABLE IF NOT EXISTS "report" (
	date date ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	mail varchar(40) ,
	name varchar(40) ,
	password varchar(40)  NOT NULL,
	roles varchar(40) ,
	surname varchar(40) ,
	username varchar(40)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);




-- relation 1:m doctor Patient - identity
ALTER TABLE patient ADD COLUMN identity INTEGER REFERENCES "identity"(_id);

-- relation 1:m doctor Patient - Doctor
ALTER TABLE patient ADD COLUMN doctor INTEGER  REFERENCES "doctor"(_id);

-- relation m:m doctor Report - Doctor
CREATE TABLE IF NOT EXISTS "Report_doctor" (
    _id SERIAL PRIMARY KEY,
    id_Report INTEGER  NOT NULL REFERENCES "report"(_id),
    id_Doctor INTEGER  NOT NULL REFERENCES "doctor"(_id)
);

-- relation m:m patient Report - Patient
CREATE TABLE IF NOT EXISTS "Report_patient" (
    _id SERIAL PRIMARY KEY,
    id_Report INTEGER  NOT NULL REFERENCES "report"(_id),
    id_Patient INTEGER  NOT NULL REFERENCES "patient"(_id)
);
