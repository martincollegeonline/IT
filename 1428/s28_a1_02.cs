namespace UnitTestsBLLTests
{
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using UnitTestingBLL.Model;
[TestClass]
public class UserTests
{
/// <summary>
/// Test to check that the properties are correctly set when the user object
/// is instantiated.
/// </summary>
    [TestMethod]
    public void Consructor_Test()
    {
        User newUser = new User();
        Assert.AreEqual(string.Empty, newUser.UserName, “Should be an empty string”);
        Assert.AreEqual(string.Empty, newUser.Password, “Should be an empty string”);
        Assert.AreEqual(string.Empty, newUser.FirstName, “Should be an empty string”);
        Assert.AreEqual(string.Empty, newUser.LastName, “Should be an empty string”);
        Assert.IsFalse(newUser.Enabled, “Should be false”);
        Assert.IsNotNull(newUser.Roles, “Needs to be instantiated”);
        Assert.IsInstanceOfType(newUser.Roles, typeof(List<string>),
                                “Should be ‘List<string>’”);
        Assert.AreEqual(0, newUser.Roles.Count, “Should be an empty collection”);
    }
}
}

