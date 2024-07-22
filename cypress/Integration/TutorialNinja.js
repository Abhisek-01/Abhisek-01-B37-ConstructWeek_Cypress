import Register from "../support/PageObject/TutorialsNinja/Register";
import Login from "../support/PageObject/TutorialsNinja/Login";
import Search from "../support/PageObject/TutorialsNinja/Search";
import AddToCart from "../support/PageObject/TutorialsNinja/AddToCart";
import Payment from "../support/PageObject/TutorialsNinja/Payment";
import Delivery from "../support/PageObject/TutorialsNinja/Delivery";
import Logout from "../support/PageObject/TutorialsNinja/Logout";
import ProductView from "../support/PageObject/TutorialsNinja/ProductView";

describe('Tutorials Ninja', () => {

  const Reg = new Register(); // objects
  const log = new Login();
  const find = new Search();
  const incart = new AddToCart();
  const Billing = new Payment();
  const delivery = new Delivery(); 
  const logout = new Logout();
  const ViewPod = new ProductView();

  it('Test1', () => {

      // Reg.EnterUrl
      //This is for Register a new user
      Reg.RegisterStep1();

      //This is login a user after register
      // log.LoginStep2();

      //This method is used for search a prodct 
      find.SearchStep3();

      //This method used for add in a cart 
      incart.AddInCartStep4();

      //This functionality is used for the payment method
      Billing.PaymentStep5();

      //These are the continue and conform the further step's idividualy
      delivery.deliveryDetail();
      delivery.deliveryMethod();
      delivery.PaymentMethod();
      delivery.ConformOrder();

      //Here after conform you need to wait for 4 second
      cy.wait(4000)

      // Logout from the page
      logout.LogoutPage();

      //Re-login the page
      log.LoginStep2();

      //After login you need to view the product detail's here
      ViewPod.ViewProdDetails();
      cy.wait(3000);
      cy.xpath("(//a[contains(@href, 'https://tutorialsninja.com/demo/index.php?route=common/home')])[1]").click();
      
      
    });


  });