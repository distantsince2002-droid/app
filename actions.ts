// app/actions.ts
'use server';

import { revalidatePath } from 'next/cache';
import { supabase } from '@/lib/supabaseClient';

export async function createListing(formData: FormData) {
  const title = formData.get('title') as string;
  const type = formData.get('type') as string;
  const price = formData.get('price') as string;
  const location = formData.get('location') as string;

  try {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return { success: false, error: 'You must be logged in' };
    }

    // Add your business logic here (rate limiting, etc.)
    const { error } = await supabase.from('listings').insert({
      user_id: user.id,
      title,
      type,
      price,
      location,
    });

    if (error) throw error;

    revalidatePath('/my-listings');

    return { success: true, message: 'Listing created successfully!' };
  } catch (error: any) {
    console.error('Create listing error:', error);
    return {
      success: false,
      error: error.message || 'Failed to create listing. Please try again.',
    };
  }
}