CREATE TABLE accounts (
  id TEXT PRIMARY KEY,
  credential TEXT NOT NULL UNIQUE,
  public_key TEXT NOT NULL,
  counter INTEGER NOT NULL,
  recovery_hash TEXT NOT NULL UNIQUE,
  generation INTEGER NOT NULL DEFAULT 1,
  revision INTEGER NOT NULL DEFAULT 0,
  progress TEXT NOT NULL DEFAULT '{}'
);

CREATE TABLE sessions (
  token_hash TEXT PRIMARY KEY,
  account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  generation INTEGER NOT NULL,
  expires INTEGER NOT NULL
);
CREATE INDEX sessions_expiry ON sessions(expires);
CREATE INDEX sessions_account ON sessions(account_id);

CREATE TABLE ceremonies (
  token_hash TEXT PRIMARY KEY,
  purpose TEXT NOT NULL,
  challenge TEXT NOT NULL,
  account_id TEXT,
  recovery_hash TEXT,
  expires INTEGER NOT NULL
);
CREATE INDEX ceremonies_expiry ON ceremonies(expires);
