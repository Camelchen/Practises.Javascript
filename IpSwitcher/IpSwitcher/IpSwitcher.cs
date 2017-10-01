using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Management;
using System.Net.NetworkInformation;

namespace IpSwitcher
{
    public partial class MainForm : Form
    {
        public JObject ips;
        public String currentAdaptor;

        public MainForm()
        {
            InitializeComponent();
            ips = JObject.Parse(File.ReadAllText(@"IpAddress.json"));
            InitialIpRange(ips);
            comboBox1.DataSource = GetAdapter();

            backgroundWorker1.DoWork += backgroudWorker1_DoWork;
            backgroundWorker1.RunWorkerCompleted += backgroundWorker1_RunWorkerCompleted;
            backgroundWorker1.RunWorkerAsync();
        }

        private void InitialIpRange(JObject ips)
        {
            for (int i = 1; i <= ips["ipRange"].Count(); i++)
            {
                Button ipButton = new Button();
                ipButton.Size = new Size(150, 50);
                ipButton.Dock = DockStyle.Top;
                ipButton.Name = "btnIpAddress" + i.ToString();
                ipButton.Text = ips["ipRange"][i - 1]["ipAddress"].ToString();
                ipButton.Font = new Font("Consolas", 14, FontStyle.Bold);
                ipButton.Click += new EventHandler(this.SetCurrentIp);
                flowLayoutPanel2.Controls.Add(ipButton);
            }
        }

        public List<String> GetAdapter()
        {
            List<String> adapterList = new List<string>();
            var adapterConfig = new ManagementClass("Win32_NetworkAdapterConfiguration");
            var networkCollection = adapterConfig.GetInstances();

            foreach (ManagementObject adapter in networkCollection)
            {
                adapterList.Add(adapter["Description"] as string);
            }
            return adapterList;
        }

        private void SetCurrentIp(Object sender, EventArgs e)
        {
            Button btnSender = sender as Button;
            foreach (Button btn in flowLayoutPanel2.Controls)
            {
                if (btn.Text == btnSender.Text)
                {
                    btnSender.BackColor = Color.RoyalBlue;

                }
                else
                {
                    btn.BackColor = Color.Transparent;
                }
            }

            //TODO: set ip address
            SetStaticIP(currentAdaptor, btnSender.Text, (string)ips["subnetMask"], (string)ips["gateway"],(string)ips["dns"]);

        }

        private void SetStaticIP(string adapterDesc, string ipAddress,string subnetMask, string gateway,string dns)
        {


            var adapterConfig = new ManagementClass("Win32_NetworkAdapterConfiguration");
            var networkCollection = adapterConfig.GetInstances();

            foreach (ManagementObject adapter in networkCollection)
            {
                string description = adapter["Description"] as string;
                if (string.Compare(description,
                    adapterDesc, StringComparison.InvariantCultureIgnoreCase) == 0)
                {
                    try
                    {
                        


                        // Set IPAddress and Subnet Mask
                        var newAddress = adapter.GetMethodParameters("EnableStatic");
                        newAddress["IPAddress"] = new string[] { ipAddress };
                        newAddress["SubnetMask"] = new string[] { subnetMask };
                        adapter.InvokeMethod("EnableStatic", newAddress, null);

                        // Set DefaultGateway
                        var newGateway = adapter.GetMethodParameters("SetGateways");
                        newGateway["DefaultIPGateway"] = new string[] { gateway };
                        newGateway["GatewayCostMetric"] = new int[] { 1 };
                        adapter.InvokeMethod("SetGateways", newGateway, null);

                        // Set DNS
                        var newDNS = adapter.GetMethodParameters("SetDNSServerSearchOrder");
                        newDNS["DNSServerSearchOrder"] = dns.Split(',');
                        adapter.InvokeMethod("SetDNSServerSearchOrder", newDNS, null);


                        lblCurrentIp.Text = "Updated to static IP address: "+ ipAddress;
                    }
                    catch (Exception ex)
                    {
                        lblCurrentIp.Text = "Unable to Set IP : " + ex.Message;
                    }
                }
            }
        }

        private void backgroudWorker1_DoWork(object sender, DoWorkEventArgs e)
        {
            while (true)
            {
                Thread.Sleep(5000);
                lblCurrentIp.Invoke(new Action(()=>lblCurrentIp.Text = "Current IP: " + GetLocalIPAddress(currentAdaptor)));
            }
        }

        private void backgroundWorker1_RunWorkerCompleted(object sender, RunWorkerCompletedEventArgs e)
        {
            
        }

        private static string GetLocalIPAddress(string adapterName)
        {
            string localIpAddress = "";
            foreach (NetworkInterface nic in NetworkInterface.GetAllNetworkInterfaces())
            {
                foreach (UnicastIPAddressInformation ip in nic.GetIPProperties().UnicastAddresses)
                {
                    if (nic.Description == adapterName)
                    {
                        if (ip.Address.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork)
                        {
                            localIpAddress =  ip.Address.ToString();
                        }
                    }
                }
            }
            return localIpAddress;
        }

        private void comboBox1_SelectedValueChanged(object sender, EventArgs e)
        {
            currentAdaptor = comboBox1.SelectedItem.ToString();
        }
    }
}
