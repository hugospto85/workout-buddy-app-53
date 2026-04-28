
-- Hide tables from auto-generated GraphQL schema (RLS still protects, REST still works)
COMMENT ON TABLE public.profiles IS E'@graphql({"totalCount": {"enabled": false}, "primary_key_columns": ["id"], "schema": "graphql_excluded"})';
COMMENT ON TABLE public.workouts IS E'@graphql({"totalCount": {"enabled": false}, "primary_key_columns": ["id"], "schema": "graphql_excluded"})';
COMMENT ON TABLE public.workout_sessions IS E'@graphql({"totalCount": {"enabled": false}, "primary_key_columns": ["id"], "schema": "graphql_excluded"})';
COMMENT ON TABLE public.user_preferences IS E'@graphql({"totalCount": {"enabled": false}, "primary_key_columns": ["id"], "schema": "graphql_excluded"})';
