import {createClient} from '@supabase/supabase-js';

const URL = 'https://nufjzziynrjecagthjoe.supabase.co';

const API_KEY = import.meta.env.API_KEY;


export const supabase = createClient(URL,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51Zmp6eml5bnJqZWNhZ3Roam9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTY0NzMsImV4cCI6MTk5NjIzMjQ3M30.ewvUbi-L6nAFQ8eS8d18_eM9MgYNFE6nijPYyq3rjAM");

