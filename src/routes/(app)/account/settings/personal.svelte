<script>

  import { enhance } from "$app/forms";

</script>
<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-6 ">Personal Information</h3>
        <p class="mt-1 text-sm ">Your Contact and personal information are very important and should be accurate.</p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <form action="?/personal" method="POST" use:enhance>
        <div class="overflow-hidden shadow sm:rounded-md">
          <div class="bg-base-100 px-4 py-5 sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="relative col-span-6 sm:col-span-3">
                <input
                  name="firstName"
                  type="text"
                  id="firstName"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                  required
                />
                <label for="firstName" class="floating-label peer-focus:text-accent-focus">
                  First Name
                </label>
              </div>

              <div class="relative col-span-6 sm:col-span-3">
                <input
                  name="lastName"
                  type="text"
                  id="lastName"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                  required
                />
                <label for="lastName" class="floating-label peer-focus:text-accent-focus">
                  Last Name
                </label>
              </div>

              <div class="relative col-span-6 sm:col-span-3">
                <input
                  name="middleName"
                  type="text"
                  id="middleName"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                  required
                />
                <label for="middleName" class="floating-label peer-focus:text-accent-focus">
                  Middle Name
                </label>
              </div>

              <div class="relative col-span-6 sm:col-span-3">
                <select
                  name="gender"
                  id="gender"
                  class=" select input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                  required
                >
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>
                <label for="gender" class="floating-label peer-focus:text-accent-focus">
                  Gender
                </label>
              </div>

              <div class="relative col-span-6 sm:col-span-3">
                <input
                  name="dob"
                  type="date"
                  id="dob"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                  required
                />
                <label for="dob" class="floating-label peer-focus:text-accent-focus">
                  Date of Birth
                </label>
              </div>

              <div class="relative col-span-6 sm:col-span-3">
                <input
                  name="email"
                  type="email"
                  id="email"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                  required
                />
                <label for="email" class="floating-label peer-focus:text-accent-focus">
                  Email
                </label>
              </div>

              <div class="relative col-span-6 sm:col-span-3">
                <input
                  name="phone"
                  type="text"
                  id="phoneNo"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                  required
                />
                <label for="phoneNo" class="floating-label peer-focus:text-accent-focus">
                  Phone Number
                </label>
              </div>


              <div class="relative col-span-6 lg:col-span-3">
                <input
                  name="address"
                  type="text"
                  id="address"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                  required
                />
                <label for="address" class="floating-label peer-focus:text-accent-focus">
                  Street address
                </label>
              </div>

              <div class="relative col-span-6 sm:col-span-6 lg:col-span-3">
                <input
                  name="city"
                  type="text"
                  id="city"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                  required
                />
                <label for="city" class="floating-label peer-focus:text-accent-focus"> City </label>
              </div>

              <div class="relative col-span-6 sm:col-span-6 lg:col-span-3">
                <input
                  name="zip"
                  type="text"
                  id="zip"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                />
                <label for="zip" class="floating-label peer-focus:text-accent-focus">
                  ZIP / Postal code
                </label>
              </div>

              <div class="relative col-span-6 sm:col-span-6 lg:col-span-3">
                <input
                  name="state"
                  type="text"
                  id="region"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                  required
                />
                <label for="region" class="floating-label peer-focus:text-accent-focus"
                  >State / Province</label
                >
              </div>

              <div class="relative col-span-6 sm:col-span-3">
                <input
                  name="country"
                  type="text"
                  id="country"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                  required
                />
                <label for="country" class="floating-label peer-focus:text-accent-focus">
                  Country
                </label>
              </div>

            </div>

            <div class="text-right mt-4">
              <button class="btn">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
