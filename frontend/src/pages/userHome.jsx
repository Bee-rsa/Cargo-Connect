import Searchbar from "../userComponents/SearchBar"; // Adjust the path as necessary
import UserNavbar from "../components/Common/userNavbar";

const UserHome = () => {
    return (
       <div
  className="w-full h-auto min-h-screen -mt-0.5 flex flex-col items-center p-2 pt-20"
  style={{ backgroundImage: "linear-gradient(180deg, #000042 10%, #5185AB 100%)" }}
>
            <UserNavbar />
            <div className="mt-6 sm:mt-10 md:mt-16 w-full">
  <Searchbar />
</div>

            {/* Main Content with three containers */}
            <div className="flex flex-col md:flex-row justify-around px-6 w-full max-w-6xl mt-24 space-y-8 md:space-y-0 md:space-x-12">
                {/* Manage Shipments Container */}
                <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/3">
                    <h2 className="text-2xl font-semibold mb-4">Manage your shipments</h2>
                    <p className="text-gray-700 mb-4">
                        Once you make your first booking, we make it easy to manage your shipment.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                        <li>Booked</li>
                        <li>In transit</li>
                        <li>Delivered</li>
                    </ul>
                </div>

                {/* Manage Payments Container */}
                <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/3">
                    <h2 className="text-2xl font-semibold mb-4">Manage your payments</h2>
                    <p className="text-gray-700 mb-4">
                        Once you book a shipment, stay up-to-date on your bills and payments.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                        <li>Open</li>
                        <li>Payment due</li>
                        <li>Paid in full</li>
                    </ul>
                </div>

                {/* Credit Container */}
                <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/3">
                    <h2 className="text-2xl font-semibold mb-4">Cargo Connect credit</h2>
                    <p className="text-gray-700 mb-4">
                        Based in the US, UK, or Canada? Take advantage of our generous credit terms. More info?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
