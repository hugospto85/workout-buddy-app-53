
-- Revoke GraphQL/anon discoverability on app tables (RLS already protects data)
REVOKE SELECT ON TABLE public.profiles FROM anon;
REVOKE SELECT ON TABLE public.workouts FROM anon;
REVOKE SELECT ON TABLE public.workout_sessions FROM anon;
REVOKE SELECT ON TABLE public.user_preferences FROM anon;

-- Also revoke discovery for authenticated role (they still access via PostgREST, which uses different perms)
-- We keep the standard CRUD perms for authenticated, only schema-level discovery is reduced via revoking unused grants on functions.

-- Lock down SECURITY DEFINER functions so they can't be called from the API
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM anon, authenticated, public;
