// import React from 'react';

import { redirect } from "next/navigation";

const default_id = '01'

const Home =async () => {
 redirect(`/category/${default_id}`)
};

export default Home;