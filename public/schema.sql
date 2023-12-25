--page2.html

CREATE TABLE functional_area (
    id          SERIAL PRIMARY KEY,
    domain      VARCHAR(10),
    work_type   VARCHAR(30),
    industry    VARCHAR(30),
    designation VARCHAR(30),
    state       VARCHAR(30),
    district    VARCHAR(30),
    dt          TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE looking_for_job (
    id          SERIAL PRIMARY KEY,
    name        varchar(100),
    email       varchar(100),
    mobile      char(10),
    state       varchar(30),
    district    varchar(30),
    dt          TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE job_change (
    id          SERIAL PRIMARY KEY,
    name        varchar(100),
    email       varchar(100),
    mobile      char(10),
    state       varchar(30),
    district    varchar(30),
    ccompany    varchar(100),
    cdesign     varchar(50),
    exp         varchar(10),
    comments    varchar(300),
    dt          TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

